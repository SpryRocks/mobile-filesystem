import { SystemDirectoryType } from '@spryrocks/mobile-filesystem-plugin-core';
declare var cordova: any;

export const mapSystemDirectoryToCor = (type: SystemDirectoryType): string => {
	switch (type) {
		case SystemDirectoryType.Data:
			return cordova.file.dataDirectory;
		case SystemDirectoryType.ExternalData:
			return cordova.file.externalDataDirectory;
		case SystemDirectoryType.Documents:
			return cordova.file.documentsDirectory;
		case SystemDirectoryType.Cache:
			return cordova.file.cacheDirectory;
	}
	throw new Error(`Unsupported system directory type: ${type}`);
};
