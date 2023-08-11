import Image from 'next/image';

const Avatar = () => {
  return <Image
    src='/images/profile.jpeg'
    height={144}
    width={191}
    alt='Avatar'
  />
};

export default Avatar;
