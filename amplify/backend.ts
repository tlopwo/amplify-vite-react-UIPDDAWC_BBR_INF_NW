import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';
import { storage } from './storage/resource';
import { downloadData } from 'aws-amplify/storage';

defineBackend({
  auth,
  data,
  storage
});


try {
  const result = downloadData({
    path: "album/2024/1.jpg",
    options: {
      // Specify a target bucket using name assigned in Amplify Backend
      bucket: "secondBucket"
    }
  }).result;
} catch (error) {
  console.log(`Error: ${error}`)
}