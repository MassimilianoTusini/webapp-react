import axios from "axios"
import { useState } from "react"

export default function ReviewForm({ movieId, reloadReviews }) {
    const initialValues = {
        name: "",
        text: "",
        vote: 1
    };

    const [formData, setFormData] = useState(initialValues);

    const setFieldValue = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const apiUrl = `http://localhost:3000/api/movies/${movieId}/reviews`;

    const handleSubmit = (e) => {
        e.preventDefault(),

            axios.post(apiUrl, formData, {
                headers: { "Content-type": "application/json" },
            })
            .then(() => {
                setFormData(initialValues);
                reloadReviews();
            })
            .catch((err) => console.log(err));
    }

    return(
        <div className="card bg-dark border-0 shadow-sm mt-4">
            <div className="card-header bg-transparent border-0">
                <h5 className="text-warning mb-0">Add review</h5>
            </div>
            <div className="card-body text-light">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Nome</label>
                        <input type="text" 
                            name="name" 
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.name}
                            onChange={setFieldValue}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Recensione</label>
                        <textarea name="text"
                            rows="3"
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.text}
                            onChange={setFieldValue}
                            required
                        ></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Voto</label>
                        <input type="number"
                            name="vote" 
                            min="1"
                            max="5"
                            className="form-control bg-dark text-light border-secondary"
                            value={formData.vote}
                            onChange={setFieldValue}
                            required
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="sumbit" className="btn btn-warning text-dark fw-semibold">Invia Recensione</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

