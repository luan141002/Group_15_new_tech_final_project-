import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    // Handle the login logic, e.g., send data to a server
    console.log('Login data:', data);
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email:</label>
          <input
            className='p-2 '
            type="text"
            name="email"
            ref={register({ required: 'Email is required', pattern: /^\S+@\S+$/i })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            ref={register({ required: 'Password is required', minLength: 6 })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
