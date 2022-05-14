//import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log('1');
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Your email address
        <input
          name="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : null}
        />
      </label>
      <label>
        Your Password
        <input
          name="password"
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: 'Invalid Password',
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : null}
        />
      </label>
      <label>
        Your Password
        <input
          name="password"
          {...register('password', {
            required: 'Password is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: 'enter valid password',
            },
          })}
          error={!!errors.password}
          helperText={errors.password ? errors.password.message : null}
        />
      </label>
      <label>
        Confirm your password
        <input
          name="confirm"
          {...register('confirm', {
            required: 'Password is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
              message: 'invalid password',
            },
          })}
          error={!!errors.confirm}
          helperText={errors.confirm ? errors.confirm.message : null}
        />
      </label>
      <label>
        Your full name
        <input
          name="fullname"
          {...register('fullname', {
            required: 'Full name is required',
          })}
          error={!!errors.fullname}
          helperText={errors.fullname ? errors.fullname.message : null}
        />
      </label>
      <label>
        Your Phone Number
        <input
          name="phone"
          {...register('phone', {
            required: 'Phone Number is required',
            pattern: {
              value: /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[789]\d{9}$/,
              message: 'Phone Number is invalid',
            },
          })}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : null}
        />
      </label>
    </form>
  );
};

export default CreateAccount;
