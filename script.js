const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.content-section');

tabs.forEach(tab => {
  tab.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove 'active' class from all tabs and sections
    tabs.forEach(t => t.classList.remove('active'));
    sections.forEach(s => s.classList.remove('active'));

    // Add 'active' to clicked tab and matching section
    this.classList.add('active');
    const section = document.getElementById(this.getAttribute('data-tab'));
    section.classList.add('active');
  });
});
