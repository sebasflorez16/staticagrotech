// Redirige directamente al login HTML del backend
export function login() {
    window.location.href = 'https://agrotechcolombia.com/templates/authentication/login.html';
}

// 🔹 Función de Logout (Exportada)
export function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.href = "/templates/authentication/login.html";
}
