import request from '@/utils/request.ts';

export const saveUserInfo = data => {
  return request.post('/api/ebuilder/form/formdata/v2/updateFormData/shsj_cjzz', data);
};

export const getStorePickerOptions = data => {
  return request.post('/api/ebuilder/form/formdata/v2/getFormDataList/shsj_dysjxx', data);
};
