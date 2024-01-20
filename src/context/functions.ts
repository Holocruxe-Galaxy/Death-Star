import { User } from './types';

export function tokenExists(token: string | null): asserts token is string {
  if (token === null)
    throw new Error("The data hasn't been saved properly in Local Storage.");
}

export async function afterSignup() {
  //   const token = localStorage.getItem('accessToken');
  //   tokenExists(token);

  //   const user = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/user`, {
  //     method: 'POST',
  //     headers: { authorization: `Bearer ${token}` },
  //   });

  //   const response = (await user.json()) as User;
  //   console.log(response);

  //   localStorage.setItem('step', step.toString());
  console.log(`%cHi, I'm Cruxis! I hope we will be great friends!`);
}

export async function afterLogin() {
  const token = localStorage.getItem('accessToken');
  tokenExists(token);

  const user = await fetch(`${process.env.NEXT_PUBLIC_MANDALORE}/user/data`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  const { status, step } = (await user.json()) as User;
  if (status !== 'COMPLETE') {
    console.log(`%cHi, I'm Cruxis! I hope we will be great friends!`);
    localStorage.setItem('step', step.toString());
  } else {
    console.log(
      `%cWelcome back! I'm glad to see you again. What do you want to talk about today?`,
    );
  }
  localStorage.setItem('status', status.toString());

  return status;
}

export async function registerToHolocruxe(user: any, auth: any) {
  window.localStorage.removeItem('createAccount');
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: user?.nickname,
      name: user?.given_name,
      lastname: user?.family_name,
      email: user?.email,
    }),
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CORUSCANT}/users/register`,
    options,
  );
  const res = await response.json();
  if (response.status === 201) {
    loginToHolocruxe(user, auth);
  } else {
    window.alert('Ésta cuenta ya existe, se iniciará sesión automáticamente');
    await loginToHolocruxe(user, auth);
    await afterSignup();
  }
}

export async function loginToHolocruxe(user: any, auth: any) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CORUSCANT}/users/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user?.email,
          last_connection: user?.updated_at,
        }),
      },
    );

    if (!response.ok) {
      window.alert(
        'La cuenta con la que está intentando iniciar sesión no existe',
      );
      window.location.href = `${process.env.NEXT_PUBLIC_CURRENT_URL}/api/auth/logout`;
      return;
    }
    const AuthorizationToken = response.headers.get('Authorization');
    if (AuthorizationToken !== null) {
      window.localStorage.setItem('accessToken', AuthorizationToken);
    }
    const userLogin = {
      email: user?.email,
      last_connection: user?.updated_at,
      rememberMe: true,
    };
    auth.login(userLogin);
    afterLogin();
    return;
  } catch (error) {
    console.error('Error en la solicitud');
  }
}
