const logos = [
  {
    src: '/f2525e18e18ece3c4a417fdd34089f6670a7151c.png',
    alt: 'Partner logo 1',
  },
  {
    src: '/4ac98ab955fb8ee545d5d0ab7d1a1906b000fe3f.png',
    alt: 'Partner logo 2',
  },
  {
    src: '/a6ea0a632fbe3526cfc3f7c6eeeba06dde0bd690.png',
    alt: 'Partner logo 3',
  },
  {
    src: '/74e12cd9ce6bacebe9bc91215953d8748868dd22.png',
    alt: 'Partner logo 4',
  },
  {
    src: '/d3a26ace00f2bd2e22b119f2cd82e48d51a3757f.png',
    alt: 'Partner logo 5',
  },
  {
    src: '/5bdd025b7eb42eda35f83a4d962b17fa28ab0ff8.png',
    alt: 'Partner logo 6',
  },
]

function LogoCarousel() {
  const marqueeLogos = [...logos, ...logos]

  return (
    <section className="w-full bg-white py-8 sm:py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {marqueeLogos.map((logo, index) => (
              <div key={`${logo.src}-${index}`} className="logo-marquee-item">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="logo-marquee-img h-7 w-auto max-w-[120px] object-contain sm:h-8 sm:max-w-[140px] lg:h-9 lg:max-w-[160px]"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LogoCarousel
