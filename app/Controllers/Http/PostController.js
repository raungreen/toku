'use strict';

class PostController {
  async store({ auth, request, response }) {
    return request.post();
  }
  async update() {
    return request.post();
  }
  async destroy() {
    return 'destroyed';
  }
}

module.exports = PostController;
