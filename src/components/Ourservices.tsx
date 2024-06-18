
import './Ourservices.css'; 
import FOOD from '../assets/food.mp4'; // Importa el video
import PetCareVideo from '../assets/petcare.mp4'; // Importa el nuevo video de Pet Care
import DeliveryVideo from '../assets/delivery.mp4'; // Importa el nuevo video de Delivery

const OurServices = () => {
  const services = [
    { 
      title: 'FOOD', 
      videoSrc: FOOD, // Usa la importación del video
      description: `
      Discover the Secret to Your Pet's Joy and Vitality!
      At Great Dane Paradise, we understand that nutrition is the key to the health and happiness of your beloved four-legged friends. That's why we are proud to offer you the best in canine nutrition, with a special focus on the well-being of your Great Dane puppies.
    
      Our commitment to excellence in puppy breeding extends to every aspect of their care, and nutrition is paramount. To provide your puppies with a balanced diet full of essential nutrients. From their earliest stage of life to adulthood, every bite is designed to promote healthy growth and a strong immune system.
    
      But we don't stop there. At Great Dane Paradise, we believe in all things natural. That's why we supplement the diet with a selection of premium proteins, including carefully chosen white and red meats. Our puppies enjoy a unique blend of flavors and nutrients, ensuring they grow up strong, active, and full of vitality.
    
      With over 5 years of experience in Great Dane puppy breeding and care, our reputation speaks for itself. Thousands of families trust us to provide their pets with the best start in life, and we are committed to maintaining that trust every step of the way.
    
      Discover the difference that quality nutrition can make in your pets' lives. Join the Great Dane Paradise family and give your puppies the food they deserve. Make every meal a moment of joy and vitality for your furry friends!
    `
    },
    { 
      title: 'PET CARE', 
      videoSrc: PetCareVideo, // Agrega la importación del nuevo video de Pet Care
      description: `At Great Dane Paradise, we take pride in offering exceptional care for our Great Dane puppies. With over 5 years of experience in breeding and caring for these noble creatures, we have committed to ensuring their well-being at every stage of their lives. Our team consists of the finest veterinarians and dedicated professionals devoted to providing a safe and loving environment for each puppy. From prenatal care to early socialization and vaccine administration, every step is carried out with meticulous attention and dedication.
      
      At Great Dane Paradise, we understand that puppy care comes first, and we strive to provide the best for each and every one of them.` 
    },
    
    { 
      title: 'DELIVERY', 
      videoSrc: DeliveryVideo, // Agrega la importación del nuevo video de Delivery
      description: `At Great Dane Paradise, we pride ourselves on providing exceptional delivery service that ensures the safety and convenience of our customers and their beloved puppies. We cover a distance of up to 300 miles around the city of Miami, ensuring that your puppy arrives directly to your doorstep with all the attention and care it deserves. However, we understand that some customers may reside beyond this distance.

      For those residing outside of this area, we offer flexible solutions. If you are located beyond the 300-mile radius, we will be happy to coordinate a convenient meeting point for both parties, ensuring that your puppy reaches you in the safest and most efficient manner possible. We strive to make the delivery process as seamless as possible, providing you with peace of mind and confidence every step of the way.  Always a pick up is an option when you work with us, as a understanding of those people who wants to meet parents on their new puppy. we have flight puppies out of the state before, we just need the time to provided the right documentation to each airline, anyway for more information jus ask. we will more than happy to help in the whole process.
 
      At Great Dane Paradise, your satisfaction and the happiness of your new family member are our top priorities. Trust us to provide you with an unparalleled delivery experience, where quality and care are always our foremost concern.` 
    }
    
  ];

  return (
    <div>
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service">
            <h2>{service.title}</h2>
            <div className="content">
              {service.videoSrc ? (
                <div>
                  <video controls>
                    <source src={service.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <p>{service.description}</p>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
