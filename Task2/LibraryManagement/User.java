package libraryManagementSystem;

import java.io.Serializable;
import java.util.List;

public class User implements Serializable{
	private static final long serialVersionUID = 1L;
	private String name;
	private String userID;
	private List<Book> borrowedBooks;
	
	public User(String name, String userID, List<Book> borrowedBooks) {
		super();
		this.name = name;
		this.userID = userID;
		this.borrowedBooks = borrowedBooks;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUserID() {
		return userID;
	}

	public void setUserID(String userID) {
		this.userID = userID;
	}

	public List<Book> getBorrowedBooks() {
		return borrowedBooks;
	}

        public void setBorrowedBooks(Book b) {
		this.borrowedBooks.add(b);
	}

}