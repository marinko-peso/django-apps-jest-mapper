const djangoAppsMapper = require('./../index');
const testAppsPath = '__tests__/dummy_project/dummy_app_structure';

describe('detect proper app structure from dummy folder', () => {
  it('should look like', () => {
    expect(djangoAppsMapper({ dir: testAppsPath })).toEqual({
      '@app:admin(.*)$': `<rootDir>/${testAppsPath}/admin/static/admin/js$1`,
      '@app:auth(.*)$': `<rootDir>/${testAppsPath}/auth/static/auth/js$1`,
      '@app:dashboard(.*)$': `<rootDir>/${testAppsPath}/dashboard/static/dashboard/js$1`
    });
  });
});

describe('gracefully fail if path provided is faulty', () => {
  it('should simply return empty object', () => {
    const dir = 'dummy_folder/here/cause_there_is_none';
    expect(djangoAppsMapper({ dir })).toEqual({});
  });
});

describe('sending custom params', () => {
  it('should apply them properly', () => {
    const dir = '__tests__/dummy_project_2/dummy_app_structure';
    const prefix = 'prefix:';
    expect(djangoAppsMapper({ dir, prefix }))
      .toEqual({
        [`${prefix}auth(.*)$`]: `<rootDir>/${dir}/auth/static/auth/js$1`
      });
  });
});
