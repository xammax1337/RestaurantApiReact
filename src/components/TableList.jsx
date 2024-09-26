import axios from 'axios'
import {useState, useEffect} from 'react'
import dayjs from 'dayjs'

export default function TableList(){

    const [tables, setTables] = useState([]);

    async function getTableList(){
        try{
            const response = await axios.get('https://localhost:7103/api/Table/GetAllTables')
            setTables(response.data)
        } catch(error){
            console.log("Error getting tables", error)
        }
    }

    // Filter bookings to show only today's bookings
    function filterTodayBookings(bookings) {
        const today = dayjs().startOf('day');
        return bookings.filter(booking => {
            const bookingTime = dayjs(booking.timeBooked);
            return today.isSame(bookingTime, 'day'); // Check if the booking is today
        });
    }

    useEffect(() => {
        getTableList();
    }, [])

    return (
        <div className="container">
            <h5 style={{marginTop: 1 + 'rem'}}>Todays Bookings and tables:</h5>
            <ul>
                {tables.map(table => (
                    <li key={table.tableId}>
                        Table number: {table.tableNumber}, Seats: {table.seats}
                        
                        {filterTodayBookings(table.bookings).length > 0 && (
                                <div>
                                    <ul>
                                        {filterTodayBookings(table.bookings).map(booking => (
                                            <li key={booking.id}>
                                                Booked between: {dayjs(booking.timeBooked).format('HH:mm')} - {dayjs(booking.timeBooked).add(2, 'hour').format('HH:mm')} .
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                    </li>
                ))}
            </ul>
        </div>
    )
}