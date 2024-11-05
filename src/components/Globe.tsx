import worldData from '../lib/world.json';
import '../styles/global.css';
import * as d3 from 'd3';
import { onCleanup, onMount } from 'solid-js';

const GlobeComponent = () => {
  let mapContainer: any;

  const visitedCountries = [
    'France',
    'Mexico',
    'USA',
    'Spain',
    'Italy',
    'Germany',
    'Switzerland',
    'Montenegro'
  ];

  const renderGlobe = () => {
    if (!mapContainer) return;

    const width = mapContainer.clientWidth;
    const height = 600;
    const sensitivity = 25;
    let projection = d3
      .geoOrthographic()
      .scale(250)
      .center([0, 0])
      .rotate([0, -30])
      .translate([width / 2, height / 2])
      .clipAngle(90) // Limit the projection to a hemisphere
      .precision(0.1);

    // Add drop shadow filter to the SVG
    d3.select(mapContainer)
      .append('defs')
      .append('filter')
      .attr('id', 'dropshadow')
      .append('feDropShadow')
      .attr('dx', '0.2')
      .attr('dy', '0.2')
      .attr('stdDeviation', '2');

    const initialScale = projection.scale();
    let pathGenerator = d3.geoPath().projection(projection);

    d3.select(mapContainer).selectAll('*').remove(); // Clear previous SVG

    let svg = d3
      .select(mapContainer)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    const waterColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-darkslate-500')
      .trim();

    const landColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-gray-500')
      .trim();

    const visitedColor = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-teal-400')
      .trim();

    svg
      .append('circle')
      .attr('fill', waterColor)
      .attr('stroke', waterColor)
      .attr('stroke-width', '0.2')
      .attr('cx', width / 2)
      .attr('cy', height / 2)
      .attr('r', initialScale);

    let map = svg.append('g');

    map
      .append('g')
      .attr('class', 'countries')
      .selectAll('path')
      .data(worldData.features)
      .enter()
      .append('path')
      .attr('d', (d: any) => pathGenerator(d))
      .attr('fill', (d) =>
        visitedCountries.includes(d.properties.name) ? visitedColor : landColor
      )
      .style('stroke', 'black')
      .style('stroke-width', 0.3)
      .style('opacity', 0.8);

    d3.timer(() => {
      const rotate = projection.rotate();
      const k = sensitivity / projection.scale();
      projection.rotate([rotate[0] - 1 * k, rotate[1]]);
      svg.selectAll('path').attr('d', (d: any) => pathGenerator(d));
    }, 200);
  };

  onMount(() => {
    renderGlobe();

    const handleResize = () => {
      renderGlobe();
    };

    window.addEventListener('resize', handleResize);

    onCleanup(() => {
      window.removeEventListener('resize', handleResize);
    });
  });

  return (
    <div class='mt-10 flex h-full w-full flex-col items-center justify-center text-white'>
      <div class='w-full max-w-sm px-6 text-xl'>
        <p>
          "Every discovery is a step into the unknown, where science meets the
          unexplored."
        </p>
        <p class='text-right'>– The Spirit of Biotech Innovation</p>
      </div>
      <div
        class='flex w-full justify-center'
        ref={(el) => (mapContainer = el)}></div>
    </div>
  );
};

export default GlobeComponent;
