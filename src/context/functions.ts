export async function afterLogin(token: any) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CORUSCANT}/onboarding/step`,
    {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  const responseData = await response.json();

  if (responseData.status !== 'COMPLETE') {
    console.log(`%cHi, I'm Cruxis! I hope we will be great friends!`);
    localStorage.setItem('step', responseData.step.toString());
  } else {
    console.log(
      `%cWelcome back! I'm glad to see you again. What do you want to talk about today?`,
    );
  }
  localStorage.setItem('status', responseData.status.toString());

  return responseData.status;
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

  if (response.status === 201) {
    loginToHolocruxe(user, auth);
  } else {
    window.alert('Ésta cuenta ya existe, se iniciará sesión automáticamente');
    await loginToHolocruxe(user, auth);
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

    const userLogin = {
      email: user?.email,
      last_connection: user?.updated_at,
      rememberMe: true,
    };
    auth.login(userLogin, AuthorizationToken);
    return;
  } catch (error) {
    console.error('Error en la solicitud');
  }
}
