import { Utensils } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Utensils className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              At VG Foods, we take pride in offering fresh and pure home-cooked food that caters to all dietary preferences. 
              Our commitment to quality ingredients and authentic recipes ensures that every dish we serve is a delightful 
              experience for our customers.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Whether you're craving traditional vegetarian delicacies, vegan specialties, or non-vegetarian dishes, 
              our skilled chefs prepare each meal with passion and attention to detail, ensuring that you get the best 
              dining experience possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;