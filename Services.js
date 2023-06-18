
const services = [
  {
    title: 'Service 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fermentum purus et nibh congue, nec aliquet urna rutrum.',
    link: 'https://example.com/service1',
    image: 'service1.jpg'
  },
  {
    title: 'Service 2',
    description: 'Phasellus volutpat semper risus, ac malesuada est tincidunt non. Fusce sed est id lorem tincidunt fermentum id id mi.',
    link: 'https://example.com/service2',
    image: 'service2.jpg'
  },
  {
    title: 'Service 3',
    description: 'Sed eget ante id orci rhoncus imperdiet. Pellentesque efficitur turpis eget lacus pulvinar, vitae dapibus nulla pharetra.',
    link: 'https://example.com/service3',
    image: 'service3.jpg'
  }
];

// Generate service cards
const servicesSection = document.querySelector('.services-section');

services.forEach(service => {
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('service');

  const image = document.createElement('img');
  image.src = service.image;
  image.alt = service.title;
  serviceCard.appendChild(image);

  const title = document.createElement('h3');
  title.textContent = service.title;
  serviceCard.appendChild(title);

  const description = document.createElement('p');
  description.textContent = service.description;
  serviceCard.appendChild(description);

  const link = document.createElement('a');
  link.href = service.link;
  link.classList.add('btn');
  link.textContent = 'Learn More';
  serviceCard.appendChild(link);

  servicesSection.appendChild(serviceCard);
});
