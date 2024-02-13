


export const parallaxStyle = (scrollTop,mousePosition) => {
  const scrollEffect = scrollTop * 0.5;
  const mouseXEffect = -(mousePosition.x / window.innerWidth) * 50 + 25;
  const mouseYEffect = -(mousePosition.y / window.innerHeight) * 50 + 25;
  return {
    backgroundPosition: `${mouseXEffect}px ${scrollEffect + mouseYEffect}px`
  };
};