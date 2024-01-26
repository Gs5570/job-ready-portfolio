import Header from '../components/Header';
import Footer from '../components/Footer';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import '../styles/Contact.css';

//toaast notification
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    emailjs
      .send('service_vd6y5sj', 'template_xp29hz1', data, 'gWegVq69n0_5K5NEU')
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();

    notify();
  };

  const notify = () => toast('Message Sent I will get back to you shortly!');

  return (
    <div>
      <Header />
      <div className="contact-body">
        <div className="form-container">
          <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <label className="label-container">
              Full Name
              <input type="text" {...register('userName')} />
            </label>
            <label className="label-container">
              Email
              <input type="text" {...register('email')} />
            </label>
            <label className="label-container">
              Message
              <textarea {...register('message')} />
            </label>
            <button type="submit">send email</button>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              transition:flip
            />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
