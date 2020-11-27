import liff from '@line/liff';

liff.init({ liffId: '1654302088-rB1Ab9ad' }, () => {
  if (process.env.NODE_ENV === 'production') {
    if (!liff.isLoggedIn()) {
      liff.login();
    }
  }
});

export const ready = () => {
  if (process.env.NODE_ENV !== 'production') {
    return Promise.resolve();
  }
  return liff.ready;
};

export const getProfile = async () => {
  await ready();
  if (process.env.DEBUG === 'true') {
    return {
      userId: process.env.ID,
      displayName: 'sample',
      pictureUrl: process.env.PROFILE_IMAGE,
      statusMessage: '',
    };
  }
  return await liff.getProfile();
};
