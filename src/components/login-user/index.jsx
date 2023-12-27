/* eslint-disable react/prop-types */
export default function LoginUser({ userName, logOut }) {
  return (
    <div className='login-user-box'>
      <p className='login-user-box__title'>Здравствуйте, {userName}</p>
      <button onClick={logOut}>Выйти</button>
    </div>
  );
}
