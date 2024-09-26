import axios from 'axios'
import {useState, useEffect} from 'react'
import dayjs from 'dayjs'

export default function BookingCreate(){

    const [email, setEmail] = useState('');
    const [bookingTime, setBookingTime] = useState('');
    const [seatsRequired, setSeatsRequired] = useState('');
    const [responseMessage, setResponseMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    
    async function handleSubmit(event){
        event.preventDefault();
        const booking = {email, bookingTime, seatsRequired: parseInt(seatsRequired)}

        try {
            const response = await axios.post('https://localhost:7103/api/Booking/CreateBooking', booking)

            const bookingTime = response.data.bookingTime;
            const formattedBookingTime = dayjs(bookingTime).format('YYYY-MM-DD HH:mm')

            setResponseMessage('Booking created successfully for ' + formattedBookingTime);
            setErrorMessage(null);
        } catch(error) {
            setErrorMessage('Failed to create booking: ' + error.response?.data || error.message);
            setResponseMessage(null);
        }
    }

    return (
        <div className="container">
            <h2 style={{paddingTop: 1 + 'rem'}}>Booking</h2>
            <p>Please enter your email, date and how many seats will be needed.</p>
            <p>Bookings are connected with your email</p>
            <form onSubmit={handleSubmit}>
                    {/* Just for testing, change so it automatically uses id if u are logged in or use the optional email to get id */}
                    <div className="form-group">
                        <label htmlFor='email'>Enter email:</label>
                        <input className="form-control" 
                        id='email' 
                        type='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='bookingTime'>Booking date:</label>
                        <input className="form-control"
                        id='bookingTime' 
                        type='datetime-local' 
                        value={bookingTime} 
                        onChange={(e) => setBookingTime(e.target.value)} 
                        required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor='seatsRequired'>How many seats?</label>
                        <input className="form-control"
                        id='seatsRequired' 
                        type='number' 
                        value={seatsRequired} 
                        onChange={(e) => setSeatsRequired(e.target.value)} 
                        required
                        />
                    </div>
                    <br/>
                <button type='submit' className='btn btn-primary'>Confirm Booking</button>
            </form>

             {/* Display success or error messages */}
             {responseMessage && <div className="alert alert-success mt-3">{responseMessage}</div>}
            {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
        </div>
    )
}