import java.sql.Connection;
import java.sql.PreparedStatement;

public class Data {
	final private String loremText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
	final private int MAX_PRICE = 999;
	final private int MIN_PRICE = 50;
	
	private String[] categories;
	private String[] prodNames;
	private String[] vendorNames;
	
	private int productCount;
	
	private Connection connection;
	private DBHandler handler;
	
	public Data(String[] categories, String[] prodNames, String[] vendorNames, int productCount) {
		this.categories = categories;
		this.prodNames = prodNames;
		this.vendorNames = vendorNames;
		this.productCount = productCount;
		
		handler = new DBHandler();
	}
	
	private int getRandomNumber(int min, int max) {
		return (int)(Math.random()* (max- min + 1)) + min; 
	}
	
	private int getRandomPrice() {
		return getRandomNumber(MIN_PRICE , MAX_PRICE );
	}
	
	public void populateDatabase(int rows) {
		int vendorsLen = this.vendorNames.length -1;
		int prodNamesLen= this.prodNames.length -1;
		int categoriesLen = this.categories.length -1;
		
		try {
			connection = handler.getConnection();
			
			System.out.println("Connected With the database successfully");
			PreparedStatement preparedStatement= connection.prepareStatement("insert into products values(?,?,?,?,?,?)");
			
			
			
			for(int i = 0; i < rows; i++) {
				
				preparedStatement.setString(1, Integer.toString(productCount));
				preparedStatement.setString(2, categories[getRandomNumber(0, categoriesLen)]);
				preparedStatement.setString(3, this.loremText);
				preparedStatement.setString(4, Integer.toString(this.getRandomPrice()));
				preparedStatement.setString(5, prodNames[getRandomNumber(0, prodNamesLen)]);
				preparedStatement.setString(6, vendorNames[getRandomNumber(0, vendorsLen)]);
			
				productCount += 1;
				
				preparedStatement.executeUpdate();
			}
			
			
		}catch(Exception e) {
			System.out.print("Error in connection to database: ");
			e.printStackTrace();
		}
	}
	
	
	
	 
}
