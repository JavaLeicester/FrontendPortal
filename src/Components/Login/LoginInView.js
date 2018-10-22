import React from "react";

const LogininView = ({ onSubmit }) => {
    return (
        <div>
            <h1> Login In</h1>

            <form onSubmit={onSubmit}>
                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                </label>

                <label>
                    Password
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                </label>
                <button type="submit"> Sign Up </button>
            </form>

        </div>
    );
};

export default LogininView;
