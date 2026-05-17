// Password-to-company mapping
const PASSWORDS = {
  'demo2024': 'demo',
  'ambasada2026': 'ambasada',
  // Add more: 'company-password': 'company-slug'
};

export function validatePassword(password) {
  const slug = PASSWORDS[password.trim()];
  if (slug) {
    sessionStorage.setItem('claw_company', slug);
    return slug;
  }
  return null;
}

export function getCompanySlug() {
  return sessionStorage.getItem('claw_company');
}

export function isRegistered() {
  return localStorage.getItem('claw_registered') === 'true';
}

export function markRegistered() {
  localStorage.setItem('claw_registered', 'true');
}

export function guardPage(expectedCompany) {
  const slug = getCompanySlug();
  if (!slug || slug !== expectedCompany) {
    window.location.href = '/';
    return false;
  }
  return true;
}
