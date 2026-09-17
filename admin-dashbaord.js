// ==========================================
// FIREBASE IMPORTS
// ==========================================

import { auth, db } from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    collection,
    doc,
    getDoc,
    getDocs,
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


// ==========================================
// ACTIVE NAVBAR LINK
// ==========================================

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {

    const href = link.getAttribute("href");

    if (href && href !== "#") {

        if (href === currentPage) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }

    }

});


// ==========================================
// NAVBAR SCROLL
// ==========================================

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".custom-navbar");

    if (navbar) {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

});


// ==========================================
// ADMIN AUTHENTICATION
// ==========================================

onAuthStateChanged(auth, async (user) => {

    if (!user) {
        alert("No user is logged in");
        return;
    }

    const adminDoc =
        await getDoc(doc(db, "users", user.uid));

    if (!adminDoc.exists()) {
        alert("Admin data not found");
        return;
    }

    const data = adminDoc.data();

    if (data.role !== "admin") {
        alert("This account is not an admin");
        return;
    }

    loadUsers();

});


// ==========================================
// USERS
// ==========================================

let users = [];
let filteredUsers = [];
let currentPageNumber = 1;

const usersPerPage = 5;

const tableBody =
    document.getElementById("userTableBody");

const searchInput =
    document.getElementById("userSearch");

const roleFilter =
    document.getElementById("roleFilter");

const statusFilter =
    document.getElementById("userStatusFilter");


// ==========================================
// LOAD USERS
// ==========================================

async function loadUsers() {

    const snapshot =
        await getDocs(collection(db, "users"));

    users = snapshot.docs
        .map(item => ({
            id: item.id,
            ...item.data()
        }))
        .filter(user => user.role === "user");

    filterUsers();

}


// ==========================================
// SEARCH + FILTER
// ==========================================

function filterUsers() {

    const search =
        searchInput?.value.toLowerCase() || "";

    const role =
        roleFilter?.value || "all";

    const status =
        statusFilter?.value || "all";

    filteredUsers = users.filter(user => {

        const name =
            (user.name || "").toLowerCase();

        const email =
            (user.email || "").toLowerCase();

        return (
            (name.includes(search) ||
             email.includes(search)) &&

            (role === "all" ||
             user.role === role) &&

            (status === "all" ||
             user.status === status)
        );

    });

    currentPageNumber = 1;

    showUsers();

}


// ==========================================
// SHOW USERS
// ==========================================

function showUsers() {

    if (!tableBody) return;

    tableBody.innerHTML = "";

    const start =
        (currentPageNumber - 1) * usersPerPage;

    const pageUsers =
        filteredUsers.slice(
            start,
            start + usersPerPage
        );


    if (pageUsers.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5">
                    No users found.
                </td>
            </tr>
        `;

    }


    pageUsers.forEach(user => {

        const row =
            document.createElement("tr");

        const status =
            user.status || "active";

        row.innerHTML = `
            <td>
                <i class="fa-solid fa-circle-user user-table-icon"></i>
                ${user.name || "User"}
            </td>

            <td>
                ${user.email || ""}
            </td>

            <td>
                <span class="role-badge">
                    ${user.role || "user"}
                </span>
            </td>

            <td>
                <span class="${
                    status === "blocked"
                    ? "status-blocked"
                    : "status-active"
                }">
                    ${status}
                </span>
            </td>

            <td>
                <button
                    class="table-btn"
                    data-id="${user.id}">
                    ${
                        status === "blocked"
                        ? "Unblock"
                        : "Block"
                    }
                </button>
            </td>
        `;

        tableBody.appendChild(row);

    });


    document
        .querySelectorAll("#userTableBody .table-btn")
        .forEach(button => {

            button.addEventListener("click", () => {
                toggleUser(button.dataset.id);
            });

        });

    updatePagination();

}


// ==========================================
// BLOCK / UNBLOCK
// ==========================================

async function toggleUser(uid) {

    const user =
        users.find(item => item.id === uid);

    if (!user) return;

    const newStatus =
        user.status === "blocked"
        ? "active"
        : "blocked";

    await updateDoc(
        doc(db, "users", uid),
        {
            status: newStatus
        }
    );

    user.status = newStatus;

    filterUsers();

}


// ==========================================
// PAGINATION
// ==========================================

function updatePagination() {

    const totalPages =
        Math.max(
            1,
            Math.ceil(
                filteredUsers.length /
                usersPerPage
            )
        );

    const info =
        document.getElementById(
            "userPaginationInfo"
        );

    const pageBtn =
        document.getElementById(
            "userPageBtn"
        );

    const prevBtn =
        document.getElementById(
            "userPrevBtn"
        );

    const nextBtn =
        document.getElementById(
            "userNextBtn"
        );


    if (info) {

        const start =
            filteredUsers.length === 0
            ? 0
            : (currentPageNumber - 1)
              * usersPerPage + 1;

        const end =
            Math.min(
                currentPageNumber * usersPerPage,
                filteredUsers.length
            );

        info.textContent =
            `Showing ${start}–${end} of ${filteredUsers.length} users`;

    }


    if (pageBtn) {
        pageBtn.textContent =
            currentPageNumber;
    }


    if (prevBtn) {
        prevBtn.disabled =
            currentPageNumber === 1;
    }


    if (nextBtn) {
        nextBtn.disabled =
            currentPageNumber === totalPages;
    }

}


// Previous Page

document
    .getElementById("userPrevBtn")
    ?.addEventListener("click", () => {

        if (currentPageNumber > 1) {

            currentPageNumber--;

            showUsers();

        }

    });


// Next Page

document
    .getElementById("userNextBtn")
    ?.addEventListener("click", () => {

        const totalPages =
            Math.ceil(
                filteredUsers.length /
                usersPerPage
            );

        if (currentPageNumber < totalPages) {

            currentPageNumber++;

            showUsers();

        }

    });


// Search

searchInput?.addEventListener(
    "input",
    filterUsers
);


// Role Filter

roleFilter?.addEventListener(
    "change",
    filterUsers
);


// Status Filter

statusFilter?.addEventListener(
    "change",
    filterUsers
);


// ==========================================
// LOGOUT
// ==========================================

document
    .getElementById("logoutBtn")
    ?.addEventListener("click", async () => {

        await signOut(auth);

        window.location.href =
            "index.html";

    });


// ==========================================
// PROPERTY CHART
// ==========================================

const propertyChart =
    document.getElementById(
        "propertyChart"
    );

if (propertyChart) {

    new Chart(propertyChart, {

        type: "line",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{

                label: "Properties Listed",

                data: [
                    8,
                    12,
                    10,
                    18,
                    15,
                    24
                ],

                borderWidth: 3,

                tension: 0.4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    labels: {
                        color: "#ffffff"
                    }

                }

            },

            scales: {

                x: {

                    ticks: {
                        color: "#9fb0c8"
                    }

                },

                y: {

                    beginAtZero: true,

                    ticks: {
                        color: "#9fb0c8"
                    }

                }

            }

        }

    });

}


// ==========================================
// USER OVERVIEW CHART
// ==========================================

const userOverviewChart =
    document.getElementById(
        "userOverviewChart"
    );

if (userOverviewChart) {

    new Chart(userOverviewChart, {

        type: "doughnut",

        data: {

            labels: [
                "Users",
                "Agents",
                "Admins"
            ],

            datasets: [{

                data: [
                    245,
                    36,
                    3
                ],

                borderWidth: 0

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {

                    position: "bottom",

                    labels: {
                        color: "#ffffff"
                    }

                }

            }

        }

    });

}


// ==========================================
// BACK TO TOP
// ==========================================

const backToTopBtn =
    document.getElementById(
        "backToTopBtn"
    );

if (backToTopBtn) {

    backToTopBtn.addEventListener(
        "click",
        function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}

// ==========================================
// FOOTER BACK TO TOP SMOOTH SCROLL SYSTEM
// ==========================================
(function() {
  const backToTopBtn = document.getElementById("backToTopBtn");
  
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", function() {
      // Safely triggers modern smooth page scrolling up to index zero layout position
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
})();
