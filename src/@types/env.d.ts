export interface EnvConfig {
	API_PORT?: string;
	API_HOST?: string;

	DB_HOST?: string;
	DB_USER?: string;
	DB_PASSWORD?: string;
	DB_NAME?: string;
	[key: string]: string | undefined;
}
