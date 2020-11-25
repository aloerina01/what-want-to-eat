import liff from '@line/liff';

liff.init({ liffId: '1654302088-rB1Ab9ad' }, () => {
  if (!liff.isLoggedIn()) {
    liff.login();
  }
});

export const getDecodedIDToken = () => {
  return liff.getDecodedIDToken();
};
