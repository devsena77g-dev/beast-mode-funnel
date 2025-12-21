import { Sparkles, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-bold">SparkleClean Pro</span>
            </div>
            <p className="text-background/70 max-w-md mb-6">
              Transforming homes across the metro area with professional, eco-friendly cleaning services since 2015. 
              Your satisfaction is our obsession.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Our Services", "Pricing", "About Us", "Testimonials", "FAQ", "Contact"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {["Residential Cleaning", "Deep Cleaning", "Move In/Out", "Office Cleaning", "Post Construction", "Special Events"].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-background/70 hover:text-primary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            © 2024 SparkleClean Pro. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
              <a key={index} href="#" className="text-sm text-background/50 hover:text-background/80 transition-colors duration-300">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
