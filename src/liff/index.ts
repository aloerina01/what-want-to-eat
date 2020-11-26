import liff from '@line/liff';

liff.init({ liffId: '1654302088-rB1Ab9ad' }, () => {
  if (!liff.isLoggedIn()) {
    liff.login();
  }
});

export const ready = () => liff.ready;

export const getIDToken = async () => {
  await liff.ready;
  return liff.getIDToken();
};

export const getDecodedIDToken = async () => {
  await liff.ready;
  return liff.getDecodedIDToken();
};
