import { defineAuth } from '@aws-amplify/backend';
import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'amplifyTeamDrive'
});
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
});
