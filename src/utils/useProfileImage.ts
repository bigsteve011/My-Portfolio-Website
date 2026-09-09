import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const STORAGE_KEY = 'omowumi_custom_profile_image';

export function useProfileImage() {
  const [profileImage, setProfileImage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return saved;
    }
    return PERSONAL_INFO.profileImage || '/src/assets/images/omowumi_profile_1787607611654.jpg';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setProfileImage(saved);
      } else {
        setProfileImage(PERSONAL_INFO.profileImage || '/src/assets/images/omowumi_profile_1787607611654.jpg');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('profile-image-updated', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('profile-image-updated', handleStorageChange);
    };
  }, []);

  const updateProfileImage = (newImage: string) => {
    localStorage.setItem(STORAGE_KEY, newImage);
    setProfileImage(newImage);
    window.dispatchEvent(new Event('profile-image-updated'));
  };

  const resetProfileImage = () => {
    localStorage.removeItem(STORAGE_KEY);
    const defaultImg = PERSONAL_INFO.profileImage || '/src/assets/images/omowumi_profile_1787607611654.jpg';
    setProfileImage(defaultImg);
    window.dispatchEvent(new Event('profile-image-updated'));
  };

  return {
    profileImage,
    updateProfileImage,
    resetProfileImage,
    defaultImage: PERSONAL_INFO.profileImage || '/src/assets/images/omowumi_profile_1787607611654.jpg'
  };
}
