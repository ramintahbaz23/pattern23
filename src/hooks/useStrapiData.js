// Data hooks - returning empty data gracefully
// These hooks maintain the same interface but return null/empty data instead of making API calls

const returnEmptyData = () => ({ data: null });

export const useHomeData = () => {
  return { data: { data: null } };
};

export const useInfoData = () => {
  return { data: { data: [] } };
};

export const useGlobalData = () => {
  return { data: { data: null } };
};

export const useAwardsData = () => {
  return { data: { data: null } };
};

export const useWorksData = () => {
  return { data: { data: [] } };
};

export const useSettingsData = () => {
  return { data: { data: null } };
};

export const useWorkData = (slug) => {
  const { data: worksData } = useWorksData();
  const work = worksData?.data?.find(work => work.slug === slug);
  return { data: { data: work || null } };
};