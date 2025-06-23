'use client';

import { MapPin, Phone, Mail } from 'lucide-react';

const ContactBlock = () => {
  const contactItems = [
    {
      icon: <MapPin className="text-white w-6 h-6 shrink-0" />,
      text: (
        <>
          Unit 1 Billington Industrial Estate,<br />
          Newport Road,<br />
          Stafford,<br />
          ST18 9DQ
        </>
      ),
    },
    {
      icon: <Phone className="text-white w-6 h-6 shrink-0" />,
      text: <a href="tel:01785532321">Call us on 01785 532321</a>,
    },
    {
      icon: <Mail className="text-white w-6 h-6 shrink-0" />,
      text: <a href="mailto:info@triplehcontracts.co.uk">Email Us</a>,
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="h6 text-white">
            At Triple H Contracts & Hire, we’re always happy to hear from you—whether you’re planning a large-scale project or just need advice on a small job. No enquiry is too big or too small. Our friendly and knowledgeable team is here to help, offering expert guidance and tailored solutions to meet your needs. We believe in clear communication, prompt responses, and building lasting relationships with our clients. So whether you’re ready to get started or simply want to discuss an idea, don’t hesitate to reach out—we’d love to hear from you.
          </div>

          <div className="flex flex-col gap-4">
            {contactItems.map((item, index) => (
              <div
                key={index}
                className="p-8 border border-white rounded-md flex items-start gap-4 transition-all hover:border-red-600 hover:bg-red-600 text-white"
              >
                {item.icon}
                <div className="text-white">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBlock;