
const teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach((member) => {
  member.addEventListener('click', () => {
    member.querySelector('.description').classList.toggle('show');
  });
});
