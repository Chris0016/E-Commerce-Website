
public class DBConnection {
	public static void main(String[] args) {
			String resources = "C:\\Users\\ChristopherPerez\\Documents\\Coding Projects\\Webapps\\E-Commerce Website\\Populate Database custom program\\Database Automation\\src\\resources\\";
		
			BatchLoader bLoader = new BatchLoader();
			String[] categories = bLoader.load(resources + "categories.txt");
			String[] prodNames = bLoader.load(resources + "ProductNames.txt");
			String[] vendorNames = bLoader.load(resources + "VendorNames.txt");			
			
			int rows = 50;
			int productCount = 14; //Value must be hardcoded. and updated
			
			Data dPop = new Data( categories,  prodNames,  vendorNames, productCount) ;
			dPop.populateDatabase(rows);
			
		}
}
