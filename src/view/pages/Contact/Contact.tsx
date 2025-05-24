import './Contact.css';
import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    // send the data backend
    const onSubmit = (data: FormData) => {
        console.log(data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className={`form-group ${errors.email ? 'error' : ''}`}>
                    <label>Email</label>
                    <input
                        type="email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Invalid email address'
                            }
                        })}
                    />
                    {errors.email && <span className="error-message">{errors.email.message}</span>}
                </div>

                <div className={`form-group ${errors.subject ? 'error' : ''}`}>
                    <label>Subject</label>
                    <input
                        type="text"
                        {...register('subject', {
                            required: 'Subject is required',
                            minLength: {
                                value: 10,
                                message: 'Subject must be at least 10 characters'
                            },
                            pattern: {
                                value: /^.{10,30}$/,
                                message: 'Subject must be between 10-30 characters'
                            }
                        })}
                    />
                    {errors.subject && <span className="error-message">{errors.subject.message}</span>}
                </div>

                <div className={`form-group ${errors.message ? 'error' : ''}`}>
                    <label>Message</label>
                    <textarea
                        rows={5}
                        {...register('message', {
                            required: 'Message is required',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters'
                            },
                            pattern: {
                                value: /^.{10,50}$/,
                                message: 'Message must be between 10-50 characters'
                            }
                        })}
                    ></textarea>
                    {errors.message && <span className="error-message">{errors.message.message}</span>}
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
}