const timelineData = [
    { year: 'April 2018', image: "images.png", description: "We are one of India's leading drone firms in providing end-to-end Drone Solutions." },
    { year: 'April 2019', image: "images.png", description: "Expanded our services to include aerial photography and mapping." },
    { year: 'April 2020', image: "images.png", description: "Launched AI-powered drone analytics platform." },
    { year: 'April 2021', image: "images.png", description: "Introduced autonomous drone delivery systems." },
    { year: 'April 2022', image: "images.png", description: "Developed specialized drones for agriculture and forestry." },
    { year: 'April 2023', image: "images.png", description: "Partnered with government for urban planning and disaster management." },
    { year: 'April 2024', image: "images.png", description: "Pioneering research in drone swarm technology." }
];

const timeline = document.querySelector('.timeline');
const progress = document.querySelector('.timeline-progress');
const content = document.querySelector('.content');
const yearTitle = document.getElementById('year-title');
const yearDescription = document.getElementById('year-description');
const yearImage = document.querySelector('.year-image');

function createTimelinePoints() {
    for (let i = 0; i < timelineData.length; i++) {
        const point = document.createElement('div');
        point.className = 'year-point';
        point.style.left = `${i / (timelineData.length - 1) * 100}%`;
        point.addEventListener('mouseenter', function() {
            updateTimeline(i);
        });

        const label = document.createElement('div');
        label.className = 'year-label';
        label.textContent = timelineData[i].year;
        label.style.left = `${i / (timelineData.length - 1) * 100}%`;

        timeline.appendChild(point);
        timeline.appendChild(label);
    }
}

function updateTimeline(index) {
    const percentage = (index / (timelineData.length - 1)) * 100;
    progress.style.width = `${percentage}%`;

    yearTitle.textContent = timelineData[index].year;
    yearDescription.textContent = timelineData[index].description;
    yearImage.src = timelineData[index].image;
    yearImage.alt = `Year ${timelineData[index].year}`;

    content.classList.remove('active');
    setTimeout(function() {
        content.classList.add('active');
    }, 50);
}

createTimelinePoints();
updateTimeline(0);