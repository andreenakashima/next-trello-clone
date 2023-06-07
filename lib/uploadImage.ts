import { ID, storage } from "@/appwrite";

export const uploadImage = async (file: File) => {
	if (!file) return;

	const fileUploaded = await storage.createFile(
		"647e2322baae50b47f72",
		ID.unique(),
		file
	);

	return fileUploaded;
};
