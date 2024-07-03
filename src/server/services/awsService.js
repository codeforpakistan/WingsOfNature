// server/services/awsService.js
import AWS from "aws-sdk";

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

export const uploadToS3 = (formData) => {
    const pictureFilename = `${Date.now()}_${formData.picture.filename}`;
    const s3Params = {
        Bucket: process.env.AWS_BUCKET,
        Key: pictureFilename,
        Body: formData.picture.data,
        ContentType: formData.picture.type,
    };

    return {
        uploadPromise: s3.upload(s3Params).promise(),
        pictureUrl: `https://${s3Params.Bucket}.s3.amazonaws.com/${pictureFilename}`,
    };
};
