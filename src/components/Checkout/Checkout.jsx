import "./Checkout.css";
import { useState } from "react";

const Checkout = () => {
    const [formData, setFormData] = useState({
        phoneNumber: "",
        name: "",
        email: "",
        amount: 0,
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const keys = `keys${Math.random()}`;

    const payKorapay = (e) => {
        e.preventDefault();  
        window.Korapay.initialize({
            key: "pk_test_wCLZPjiCUMhP79MFoGiDGVgEgzkBBrAoPMGiwjh5",
            reference: keys,
            amount: formData.amount * 100, 
            currency: "NGN",
            customer: {
                name: formData.name,
                email: formData.email,
            },
            notification_url: "https://example.com/webhook",
        });
    };

    return (
        <div className="checkOut">
            <form onSubmit={payKorapay}>
                <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                    className="inputCheckOut"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    className="inputCheckOut"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    required
                    className="inputCheckOut"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type=""
                    name="amount"
                    placeholder="Amount"
                    required
                    className="inputCheckOut"
                    value={formData.amount}
                    onChange={handleChange}
                />
                <button type="submit" className="payBtn">Pay</button>
            </form>
        </div>
    );
};

export default Checkout;
