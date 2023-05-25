import React from 'react';
import Notification from './Notification/Notification';
import emailjs from '@emailjs/browser';

import './styles/styles.css';

const INITIAL_STATE = {
	name: '',
	phone: '',
	email: '',
	subject: '',
	description: '',
}

export const Form = () => {
	const [formSubmitted, setFormSubmitted] = React.useState(false);
	const [title, setTitle] = React.useState('Your Request was successfully submitted!');
	const [description, setDescription] = React.useState("We'll get back to you as soon as possible!");

	const [formData, setFormData] = React.useState(INITIAL_STATE)

	const formRef = React.useRef();

	const onFormChange = (e) => {
		e.preventDefault();

		setFormData({
			...formData,
			[e.target.id]: e.target.value
		})
	}

	const submitForm = async (e) => {
		e.preventDefault();

		try {
			await emailjs.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				formData,
				process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
		} catch(e) {
			setTitle('Something went wrong.');
			setDescription('Please try again later');
		} finally {
			setFormSubmitted(true);
			setTimeout(() => {
				setFormSubmitted(false);
				setFormData(INITIAL_STATE);
			}, 5000);
		}
	}

    return (
		<section className="contact" id="contact">
			{formSubmitted && <Notification title={title} description={description} />}
			<div className="contact-div">
				<div className="left">
					<h1>Ask away</h1>
					<h3>Feel free to ask anything. <br/><br/>General questions, quotes, turnaround times - you name it. We'll be sure to answer ASAP. </h3>
				</div>
				<div className="right">
					<form ref={formRef} onSubmit={submitForm}>
						<div className="input-group">
							<input type="text" id="name" onChange={onFormChange} required />
							<label for="name">Name*</label>
						</div>
						<div className="input-group">
							<input type="text" id="phone" onChange={onFormChange} required />
							<label for="phone">Phone Number*</label>
						</div>
						<div className="input-group">
							<input type="email" id="email" onChange={onFormChange} required />
							<label for="email">Email*</label>
						</div>
						<div className="input-group">
							<input type="text" id="subject" onChange={onFormChange} required />
							<label for="subject">Subject*</label>
						</div>
						<div className="input-group">
							<textarea rows="8" id="message" onChange={onFormChange} required ></textarea>
							<label for="message">Message*</label>
						</div>
						<button type="submit">SUBMIT</button>
					</form>
				</div>
			</div>
		</section>
    )
}