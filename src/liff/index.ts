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

export const getIDToken = async () => {
  await ready();
  if (process.env.DEBUG === 'true') {
    return process.env.ID;
  }
  return liff.getIDToken();
};

export const getDecodedIDToken = async () => {
  await ready();
  if (process.env.DEBUG === 'true') {
    return {
      picture: process.env.PROFILE_IMAGE,
    };
  }
  return liff.getDecodedIDToken();
};
