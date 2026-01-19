create table candidates (
	id INT NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	position VARCHAR(50),
	status enum_candidates_status NOT NULL DEFAULT 'active'::enum_candidates_status,
	email VARCHAR(50) NOT NULL,
	phone VARCHAR(50) NOT NULL,
	description TEXT,
  "createdAt" TIMESTAMP DEFAULT now(),
  "updatedAt" TIMESTAMP DEFAULT now()
);
insert into candidates (id, name, position, status, email, phone, description) values (1, 'Marthena Sodeau', 'Geologist III', 'rejected', 'msodeau0@unesco.org', '198-171-5588', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.');
insert into candidates (id, name, position, status, email, phone, description) values (2, 'Doreen Lonnon', 'Account Executive', 'rejected', 'dlonnon1@live.com', '352-712-2284', 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.

Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.');
insert into candidates (id, name, position, status, email, phone, description) values (3, 'Harmony Abarough', 'Chemical Engineer', 'active', 'habarough2@apple.com', '628-965-1574', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.

Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.

Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.');
insert into candidates (id, name, position, status, email, phone, description) values (4, 'Prent Wank', 'Account Executive', 'active', 'pwank3@youku.com', '936-172-0946', 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.

Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.

Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.');
insert into candidates (id, name, position, status, email, phone, description) values (5, 'Isobel Ninnoli', 'Database Administrator II', 'rejected', 'ininnoli4@buzzfeed.com', '442-988-7911', 'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.');
insert into candidates (id, name, position, status, email, phone, description) values (6, 'Herrick Ainsworth', 'Senior Quality Engineer', 'active', 'hainsworth5@hugedomains.com', '933-848-0123', 'Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.');
insert into candidates (id, name, position, status, email, phone, description) values (7, 'Donica Porteous', 'Design Engineer', 'active', 'dporteous6@accuweather.com', '211-533-7687', 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.

Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.

Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.');
insert into candidates (id, name, position, status, email, phone, description) values (8, 'Emlyn Gravet', 'Data Coordinator', 'active', 'egravet7@imdb.com', '552-917-7049', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.');
insert into candidates (id, name, position, status, email, phone, description) values (9, 'Roxi Reuven', 'Database Administrator IV', 'active', 'rreuven8@webmd.com', '993-215-8210', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.

Phasellus in felis. Donec semper sapien a libero. Nam dui.');
insert into candidates (id, name, position, status, email, phone, description) values (10, 'Isador Muff', 'Director of Sales', 'rejected', 'imuff9@blogspot.com', '890-622-4157', 'Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.

Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.');
insert into candidates (id, name, position, status, email, phone, description) values (11, 'Gradey Packington', 'Media Manager III', 'interview', 'gpackingtona@cpanel.net', '334-232-9595', 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.');
insert into candidates (id, name, position, status, email, phone, description) values (12, 'Dud Theobalds', 'Financial Advisor', 'active', 'dtheobaldsb@jiathis.com', '875-786-5776', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.');
insert into candidates (id, name, position, status, email, phone, description) values (13, 'Chas Huson', 'VP Product Management', 'interview', 'chusonc@yellowbook.com', '499-318-1565', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.');
insert into candidates (id, name, position, status, email, phone, description) values (14, 'Meir Talmadge', 'Staff Accountant III', 'rejected', 'mtalmadged@marketwatch.com', '902-460-3185', 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.');
insert into candidates (id, name, position, status, email, phone, description) values (15, 'Mikkel Naismith', 'Cost Accountant', 'active', 'mnaismithe@kickstarter.com', '367-294-3587', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.');
insert into candidates (id, name, position, status, email, phone, description) values (16, 'Henryetta MacNelly', 'Internal Auditor', 'rejected', 'hmacnellyf@seesaa.net', '279-860-4480', 'Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.');
insert into candidates (id, name, position, status, email, phone, description) values (17, 'Blancha Espada', 'Assistant Manager', 'interview', 'bespadag@printfriendly.com', '154-945-2218', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.');
insert into candidates (id, name, position, status, email, phone, description) values (18, 'Elia Storror', 'Associate Professor', 'active', 'estorrorh@bravesites.com', '306-585-8812', 'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.

Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.

Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.');
insert into candidates (id, name, position, status, email, phone, description) values (19, 'Roxane Kimblin', 'Social Worker', 'interview', 'rkimblini@odnoklassniki.ru', '251-721-8576', 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.

Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.');
insert into candidates (id, name, position, status, email, phone, description) values (20, 'Ketty Rabbatts', 'Budget/Accounting Analyst I', 'interview', 'krabbattsj@behance.net', '967-280-5102', 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.

Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.');
