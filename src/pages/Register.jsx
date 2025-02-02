import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const { createNewUser, setUser } = useContext(AuthContext);

    const handleRegisterSubmit = e => {
        e.preventDefault();

        // get form data
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log({ name, photo, email, password });


        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
    return (
        <div className="flex justify-center items-center py-14">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-5">
                <h2 className="text-center font-bold text-3xl mt-5">Register your Account</h2>
                <form onSubmit={handleRegisterSubmit} className="card-body pt-3">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label justify-start gap-3 cursor-pointer">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text">Accept <Link className="font-semibold hover:underline" to='/'>Terms & Conditions</Link> </span>
                        </label>
                    </div>
                    <div className="form-control mt-3">
                        <button className="btn btn-neutral">Register</button>
                    </div>
                    <p>Already have a Account? Please <Link className="font-semibold hover:underline" to='/auth/login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;