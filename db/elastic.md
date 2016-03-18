##Elasticsearch

Elasticsearch is a juggernaut solution for your data extraction problems. A single developer can use it to find the high-value needles underneath all of your data haystacks, so you can put your team of data scientists to work on another project. Consider these benefits:

**Real-time data and real-time analyticsi.** The ELK stack gives you the power of real-time data insights, with the ability to perform super-fast data extractions from virtually all structured or unstructured data sources. Real-time extraction, and real-time analytics. Elasticsearch is the engine that gives you both the power and the speed.

**Scalable, high-availability, multi-tenant.** With Elasticsearch, you can start small and expand it along with your business growth-when you are ready. It is built to scale horizontally out of the box. As you need more capacity, simply add another node and let the cluster reorganize itself to accommodate and exploit the extra hardware. Elasticsearch clusters are resilient, since they automatically detect and remove node failures. You can set up multiple indices and query each of them independently or in combination.

**Full text search.** Under the cover, Elasticsearch uses Lucene to provide the most powerful full-text search capabilities available in any open-source product. The search features come with multi-language support, an extensive query language, geolocation support, and context-sensitive suggestions, and autocompletion.

**Document orientation.** You can store complex, real-world entities in Elasticsearch as structured JSON documents. All fields have a default index, and you can use all the indices in a single query to get precise results in the blink of an eye.


---

###Start the service
in the elasticsearch folder run the command

```sh
$ ./bin/elasticsearch
```


###Create an index
```sh
$ curl -XPUT 'http://localhost:9200/twitter/'
```

```sh
$ curl -XPUT 'http://localhost:9200/twitter/' -d '
index :
    number_of_shards : 3 
    number_of_replicas : 2 
'
```


###Delete an index
```sh
$ curl -XDELETE 'http://localhost:9200/twitter/'
```
The delete index API can also be applied to more than one index, by either using a comma separated list, or on all indices (be careful!) by using _all or * as index.


###Get an index
```sh
$ curl -XGET 'http://localhost:9200/twitter/'
```


###List all indexes
```sh
curl 'localhost:9200/_cat/indices?v'
```


###Get cluster health
```sh
curl 'localhost:9200/_cat/health?v'
curl 'localhost:9200/_cat/nodes?v'
```


###Search
```sh
$ curl -XGET 'http://localhost:9200/twitter/_search?q=user:usse'
```
search across every index

```sh
$ curl -XGET 'http://localhost:9200/_search?q=tag:wow'
```