import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
//import useAlert from '..hooks/useAlert.js'
//import Alert from '../components/Alert.jsx'


const Contact = () => {

    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })
    
    const handleChange = ({target: {name, value}}) => {
        setForm({...form, [name]:value})
    }
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send('service_xeymhqe', 'template_rq0c7jd', {
                from_name: form.name, 
                to_name: 'Ruth', 
                from_email: form.email, 
                to_email: 'repenney8@gmail.com',
                message: form.message,
            } , 'dr5y1KIFIs9hP4pg7'
            )

            setLoading(false);
            alert('Your message has been sent!')
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.')
        }
        
    }
    
    return (
        <section className="c-space my-20" id="contact">
    
          <h3 className="work-head-text">Contact Me</h3>
          <div className="relative min-h-screen mt-10 flex flex-col items-center justify-center">
            
    
            <div className="contact_content_container">
              <p className='contact-text'>Looking forward to hearing from you!</p>
    
              <form ref={formRef} onSubmit={handleSubmit} className="mt-5 flex flex-col space-y-8">
                <label className="space-y-3">
                  <span className="field-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="Your name"
                  />
                </label>
    
                <label className="space-y-3">
                  <span className="field-label">Email address</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="field-input"
                    placeholder="youremail@gmail.com"
                  />
                </label>
    
                <label className="space-y-3">
                  <span className="field-label">Your message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="field-input"
                    placeholder="Share your thoughts or inquiries..."
                  />
                </label>
    
                <button className="field-btn" type="submit" disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
    
                  <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                </button>
              </form>
            </div>
          </div>
        </section>
      );
    };
    
export default Contact;