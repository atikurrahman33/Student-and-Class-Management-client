

const Banner = () => {
    return (
        <div>
            <div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/d5SSpX3/123.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-cyan-200">Education Everywhere</h1>
      <p className="mb-5">Embark on a journey of skill development and personal growth with EduMentor. We believe in the power of learning to transform lives, and our online platform is designed to empower you with the skills you need to thrive in todays dynamic world .</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;