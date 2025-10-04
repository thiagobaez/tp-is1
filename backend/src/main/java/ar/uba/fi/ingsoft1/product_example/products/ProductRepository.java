package ar.uba.fi.ingsoft1.product_example.products;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    // Stringly-typed generated query, see
    // https://docs.spring.io/spring-data/jpa/reference/jpa/query-methods.html
    List<Product> findByNameContaining(String namePart);
}
